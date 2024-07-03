import "./newPost.css";
export const NewPost = () => {
  // const submit = (data) => {
  //   const formData = new FormData();
  //   formData.append("text", data.text);
  //   formData.append("file", data.file);
  //   if (photo) {
  //     formData.append("photo", photo);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("title"));
    await fetch("http://localhost:3001/diary-entries/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.get("title"),
        description: data.get("description"),
      }),
    });
  };

  return (
    <form action="#" className="form-container" onSubmit={handleSubmit}>
      <div className="form-content">
        <div className="form-field">
          <input
            type="text"
            className="form-input"
            placeholder="Enter your message"
            name="title"
          />
        </div>
        <div className="form-field">
          <textarea
            className="form-textarea"
            placeholder="Enter your message"
            name="description"
          ></textarea>
        </div>
        <div className="form-field">
          <button type="submit" className="form-button">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
