
These are **not valid TypeScript/React code** and are causing the build to fail.

### Easiest Fix

Delete the file contents completely and replace with this exact code:

:::writing{variant="document" id="64182"}
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-5xl font-bold">
          Lakshya Current Affairs & PCS Academy
        </h1>

        <p className="mt-4 text-xl">
          UPPSC • PET • Lekhpal • Health Education Officer • RO/ARO
        </p>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Current Affairs</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Daily Current Affairs</h3>
            <p>Latest daily updates for competitive exams.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Weekly Current Affairs</h3>
            <p>Weekly revision and important events.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl">Monthly Current Affairs</h3>
            <p>Monthly PDF and exam-focused notes.</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center p-6">
        © 2026 Lakshya Current Affairs & PCS Academy
      </footer>
    </main>
  );
}
:::

### Then

1. Click **Commit changes**
2. Commit directly to **main**
3. Wait 1 minute
4. Open Vercel → Deployments

Send me the **new build log** or tell me if it says:

```text id="u6a4sa"
Ready
