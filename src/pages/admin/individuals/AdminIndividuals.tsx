import AdminDashboardLayout from "../../../components/admin/AdminDashboardLayout/AdminDashboardLayout";
import {
  AdminIndividualTable,
  Individual,
} from "../../../components/admin/adminTable/individualTable";

const data: Individual[] = [
  {
    id: "1",
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-05T10:30:00Z",
  },
  {
    id: "2",
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "987-654-3210",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-06-15T15:00:00Z",
  },
  {
    id: "3",
    fullName: "David Lee",
    email: "david.lee@example.com",
    phone: "555-123-4567",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-20T09:45:00Z",
  },
  {
    id: "4",
    fullName: "Sarah Jones",
    email: "sarah.jones@example.com",
    phone: "111-222-3333",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-10T12:00:00Z",
  },
  {
    id: "5",
    fullName: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "444-555-6666",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-01T16:30:00Z",
  },
  {
    id: "6",
    fullName: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "777-888-9999",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-25T08:15:00Z",
  },
  {
    id: "7",
    fullName: "Daniel Wilson",
    email: "daniel.wilson@example.com",
    phone: "222-333-4444",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-10T11:00:00Z",
  },
  {
    id: "8",
    fullName: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    phone: "555-444-3333",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-05T14:45:00Z",
  },
  {
    id: "9",
    fullName: "James Anderson",
    email: "james.anderson@example.com",
    phone: "888-777-6666",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-18T13:30:00Z",
  },
  {
    id: "10",
    fullName: "Chloe Green",
    email: "chloe.green@example.com",
    phone: "111-333-5555",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-12T17:15:00Z",
  },
  {
    id: "11",
    fullName: "Ethan Turner",
    email: "ethan.turner@example.com",
    phone: "666-555-4444",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-28T09:00:00Z",
  },
  {
    id: "12",
    fullName: "Sophia Miller",
    email: "sophia.miller@example.com",
    phone: "999-888-7777",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-15T12:30:00Z",
  },
  {
    id: "13",
    fullName: "William Jackson",
    email: "william.jackson@example.com",
    phone: "333-444-5555",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-18T15:45:00Z",
  },
  {
    id: "14",
    fullName: "Amelia Harris",
    email: "amelia.harris@example.com",
    phone: "444-333-2222",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-07-30T11:15:00Z",
  },
  {
    id: "15",
    fullName: "Noah Martinez",
    email: "noah.martinez@example.com",
    phone: "777-666-5555",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-22T14:00:00Z",
  },
  {
    id: "16",
    fullName: "Olivia Johnson",
    email: "olivia.johnson@example.com",
    phone: "222-555-3333",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-20T16:30:00Z",
  },
  {
    id: "17",
    fullName: "Elijah Brown",
    email: "elijah.brown@example.com",
    phone: "555-222-1111",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-01T13:15:00Z",
  },
  {
    id: "18",
    fullName: "Sophia Rodriguez",
    email: "sophia.rodriguez@example.com",
    phone: "888-555-4444",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-25T15:00:00Z",
  },
  {
    id: "19",
    fullName: "James Wilson",
    email: "james.wilson@example.com",
    phone: "333-333-1111",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-08-10T08:45:00Z",
  },
  {
    id: "20",
    fullName: "Amelia Davis",
    email: "amelia.davis@example.com",
    phone: "444-222-3333",
    status: "ACTIVE",
    isVerified: true,
    createdAt: "2024-09-15T11:30:00Z",
  },
];

function AdminIndividuals() {
  return (
    <>
      <AdminDashboardLayout>
        <section className="adminIndividuals p-3">
          <AdminIndividualTable data={data} />
        </section>
      </AdminDashboardLayout>
    </>
  );
}

export default AdminIndividuals;
