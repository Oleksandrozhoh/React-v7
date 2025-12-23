const Note = ({note, deleteNote}) => {
    return ( 
         <div key={note.id} 
            className={`flex flex-col p-4 bg-white rounded-lg shadow-md border-l-4 ${note.priority === 'Low' ? 'border-green-500' : note.priority === 'Medium' ? 'border-yellow-500' : 'border-red-500'}`}>
                <h3 className="text-xl py-1 font-bold mb-2">{note.title}</h3>
                <p className="text-sm text-gray-600 mb-1 "><span className="font-semibold">Priority:</span> {note.priority}</p>
                <p className="text-sm text-gray-600 mb-2"><span className="font-semibold">Category:</span> {note.category}</p>
                <p className="text-black-700">{note.description}</p>
                <button className="mt-4 text-red-500 cursor-pointer transition hover:text-red-700" 
                onClick={()=>deleteNote(note.id)}>Delete</button>
            </div>
     );
}
 
export default Note;