const FormObject = (type: string) => {
  return (
    <input
      type={type}
      id="email_1"
      name="email_1"
      data-alias=""
      className="form-control"
    />
  );
};

const object = [
  {
    type: "email",
    name: "email_1",
    id: "email_1",
  },
  { type: "password", name: "password1", id: "password1" },
];
export default function App({ isDragging, text }: any) {
  return (
    <>
      <form id="form-app">
        <fieldset className="row">
          <div className="col-xs-12">
            <h3 className="legend">Untitled Form</h3>
          </div>
          <div className="col-xs-12">
            <p>This is my form. Please fill it out. Thanks!</p>
          </div>
            <div className="col-xs-12">
            <div className="form-group">
              <label className="control-label" htmlFor="email_1">
                Email Field
              </label>
              {object.map((index) => {
               return FormObject(index.type)
              })}
            </div>
          </div>
          <div className="col-xs-12">
            <p>You can edit this paragraph by clicking here.</p>
          </div>
          <div className="col-xs-12">
            <div className="form-action">
              <button
                type="submit"
                id="button_1"
                name="button_1"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}
