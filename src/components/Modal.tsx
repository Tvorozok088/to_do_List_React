type Props = {
  closeModal: () => void;
  value: string;
  changeValue: (event: any) => void;
  addTodo: () => void;
  editId: number | null;
  editTodo: (id: number) => void;
};

export default function Modal({
  closeModal,
  value,
  changeValue,
  addTodo,
  editId,
  editTodo,
}: Props) {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__top">
          <h2 className="modal__title">{editId ? "Edit Note" : "New Note"}</h2>
          <input
            value={value}
            onChange={changeValue}
            type="text"
            className="modal__input"
            placeholder="Input your note..."
          />
        </div>
        <div className="modal__btns">
          <button className="modal__cancel" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="modal__apply "
            onClick={() => (editId ? editTodo(editId) : addTodo())}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
