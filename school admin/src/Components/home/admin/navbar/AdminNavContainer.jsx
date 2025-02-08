import AdminNav from "./AdminNav";

const AdminNavContainer = () => {
  return (
    <div className="flex h-screen p-5">
      <AdminNav />
      <div>
        <main className="rlex-1 p-12 ">
          <h1 className="font-inter text-3xl font-semibold">All students</h1>
        </main>
      </div>
    </div>
  );
};

export default AdminNavContainer;
