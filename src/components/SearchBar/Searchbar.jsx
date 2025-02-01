import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();
    if (topic === "") {
      toast.error("Enter parameters for search!", {
        duration: 3000,
        position: "top-right",
      });
      return;
    }
    onSubmit(topic);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
}
