export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen bg-[url('/background.png')] bg-cover flex justify-end">
      {children}
    </main>
  );
}