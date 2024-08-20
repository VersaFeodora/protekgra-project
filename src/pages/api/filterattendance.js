// src/app/api/attendance/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { BigQuery } from '@google-cloud/bigquery';
import { parse, format } from 'date-fns';

const bigquery = new BigQuery({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  projectId: 'quick-pointer-414903', // Replace with your Google Cloud Project ID
});

const parseAndFormatDate = (dateString) => {
    // Parse the input date string
    const parsedDate = parse(dateString, 'yyyy-MM-dd HH:mm:ss.SSS', new Date());
  
    // Format the date to the desired format
    return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss.SSSX");
  };

export const config = {
    runtime: 'nodejs',
  };

export default async function handler(req, res) {
    

    try {
        const { before, after } = req.body;
        const beforeDate = parseAndFormatDate(before);
        const afterDate = parseAndFormatDate(after);
        const query = `SELECT * FROM (
  SELECT * FROM lecturer_attendance.attendance
INNER JOIN lecturer_attendance.device USING (macAddress)
INNER JOIN lecturer_attendance.lecturer USING (lecturer_id)
) AS tableData
INNER JOIN lecturer_attendance.user ON tableData.user_username = user.username
WHERE timestamp BETWEEN @before AND @after
ORDER BY timestamp DESC
LIMIT 1000`; // Update with your actual dataset
        const options = {
          query: query,
          params: {
            before: beforeDate,
            after: afterDate,
          },
        };
        const [rows] = await bigquery.query(options);
        res.status(200).json(rows);
      } catch (error) {
        console.error('Error fetching attendance:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch attendance data.' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
}
