import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [email, setEmail] = useState("");
  const [todos, setTodos] = useState([]);
  const [appAlert, setAppAlert] = useState({ show: false, message: "", type: "" });

  // 🔔 SHOW ALERT
  const showAlert = (message, type = "info") => {
    setAppAlert({ show: true, message, type });

    setTimeout(() => {
      setAppAlert({ show: false, message: "", type: "" });
    }, 3000);
  };

  // 📧 SEND EMAIL (Via Backend)
  const sendEmailAlert = async (taskName) => {
    if (!email) {
      console.log("ℹ️ No email provided, skipping notification.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, task: taskName }),
      });

      if (response.ok) {
        showAlert("📧 Email alert sent successfully!", "success");
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      showAlert("❌ Failed to send email alert", "danger");
      console.error("EMAIL ERROR:", error);
    }
  };

  // ➕ ADD TODO
  const addTodo = async () => {
    if (!task.trim()) {
      showAlert("⚠️ Task cannot be empty", "warning");
      return;
    }

    if (!email.trim()) {
      showAlert("⚠️ Please enter an email address to receive notifications", "warning");
      return;
    }

    setTodos([...todos, { text: task, completed: false }]);
    const taskName = task; // Capture current task name before clearing
    setTask("");

    showAlert("✅ Task added", "success");
    await sendEmailAlert(taskName);
  };

  // ✔ TOGGLE TODO
  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  // 🗑 DELETE TODO
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
    showAlert("🗑️ Task deleted", "danger");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">📝 Todo App</h2>

        {appAlert.show && (
          <div className={`alert alert-${appAlert.type} text-center`}>
            {appAlert.message}
          </div>
        )}

        {/* 📧 Email Input */}
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Enter your email for notifications..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Add
          </button>
        </div>

        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? "list-group-item-success" : ""
              }`}
            >
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => toggleTodo(index)}
              >
                {todo.text}
              </span>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
