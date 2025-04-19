import { columns, Student } from "@/components/student-table/columns";
import { DataTable } from "@/components/student-table/data-table";


export default function Students() {
  const data = [
    {
      id: 1,
      firstName: 'banana',
      lastName: "pending",
      email: "m@example.com",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}