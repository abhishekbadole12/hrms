import Department from "@/models/Department";
import { NextRequest, NextResponse } from "next/server";

// Create a new department
// This function handles the POST request to create a new department
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Step 1: Parse the JSON body from the incoming request
    const body = await req.json();
    const { name, description, created_by } = body;

    // Step 2: Validate the required field (name must be present and a string)
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Department name is required" },
        { status: 400 }
      );
    }

    // Step 3: Check if a department with the same name already exists
    const existing = await Department.findOne({ where: { name } });
    if (existing) {
      return NextResponse.json(
        { error: "Department already exists" },
        { status: 409 }
      );
    }

    // Step 4: Create the department record in the database
    const department = await Department.create({
      name,
      description,
      created_by,
    });

    // Step 5: Return success response with created department details
    return NextResponse.json(
      {
        message: "Department created successfully",
        department,
      },
      { status: 201 }
    );
  } catch (error) {
    // Step 6: Catch and log any error, return 500 Internal Server Error
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Fetch all departments
// This function handles the GET request to fetch all departments
export async function GET() {
  try {
    const departments = await Department.findAll({
      attributes: ["department_id", "name", "value", "description"],
      where: {
        status: "ACTIVE",
      },
      order: [["name", "ASC"]],
    });

    return NextResponse.json(departments);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
