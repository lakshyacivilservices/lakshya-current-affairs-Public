export default function Home() {
return ( <main className="min-h-screen bg-gray-50">

```
  <section className="bg-blue-900 text-white py-16 text-center">
    <h1 className="text-5xl font-bold">
      Lakshya Current Affairs & PCS Academy
    </h1>

    <p className="mt-4 text-xl">
      UPPSC • PET • Lekhpal • Health Education Officer • RO/ARO
    </p>
  </section>

  <section className="p-8">
    <h2 className="text-3xl font-bold mb-6">
      Current Affairs
    </h2>

    <div className="grid md:grid-cols-3 gap-4">

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-xl">
          Daily Current Affairs
        </h3>
        <p>
          Latest daily updates for competitive exams.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-xl">
          Weekly Current Affairs
        </h3>
        <p>
          Weekly revision and important events.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-bold text-xl">
          Monthly Current Affairs
        </h3>
        <p>
          Monthly PDF and exam-focused notes.
        </p>
      </div>

    </div>
  </section>

  <section className="bg-white p-8">
    <h2 className="text-3xl font-bold mb-6">
      Popular Exams
    </h2>

    <div className="grid md:grid-cols-4 gap-4">

      <div className="p-4 border rounded">
        UPPSC PCS
      </div>

      <div className="p-4 border rounded">
        UPSSSC PET
      </div>

      <div className="p-4 border rounded">
        Lekhpal
      </div>

      <div className="p-4 border rounded">
        Health Education Officer
      </div>

      <div className="p-4 border rounded">
        RO/ARO
      </div>

      <div className="p-4 border rounded">
        Junior Assistant
      </div>

      <div className="p-4 border rounded">
        UGC NET Psychology
      </div>

      <div className="p-4 border rounded">
        Mock Tests
      </div>

    </div>
  </section>

  <section className="p-8">
    <h2 className="text-3xl font-bold mb-6">
      MCQ Zone
    </h2>

    <div className="grid md:grid-cols-3 gap-4">

      <div className="bg-white p-6 rounded-xl shadow">
        Daily MCQs
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        Subject Wise MCQs
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        Full Mock Tests
      </div>

    </div>
  </section>

  <section className="bg-blue-100 p-8">
    <h2 className="text-3xl font-bold mb-6">
      Resources
    </h2>

    <div className="grid md:grid-cols-4 gap-4">

      <div className="bg-white p-4 rounded">
        Books
      </div>

      <div className="bg-white p-4 rounded">
        PDF Store
      </div>

      <div className="bg-white p-4 rounded">
        YouTube
      </div>

      <div className="bg-white p-4 rounded">
        Blog
      </div>

    </div>
  </section>

  <footer className="bg-black text-white text-center p-6">
    © 2026 Lakshya Current Affairs & PCS Academy
  </footer>

</main>
```

);
}
