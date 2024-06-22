const CommentForm = () => {
  return (
    <div>
      <form className="space-y-6">
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
        <button className="btn btn-active">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
