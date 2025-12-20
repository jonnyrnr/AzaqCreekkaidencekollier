import { NextResponse } from "next/server";

/**
 * Create a standardized error response
 */
export function createErrorResponse(error: string, status: number = 400) {
  return NextResponse.json({ error }, { status });
}

/**
 * Create a standardized success response
 */
export function createSuccessResponse(data: Record<string, unknown>, status: number = 200) {
  return NextResponse.json({ success: true, ...data }, { status });
}

/**
 * Generate a reference number for tracking
 */
export function generateReferenceNumber(prefix: string = "REF"): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 7);
  return `${prefix}-${timestamp}-${random}`.toUpperCase();
}
