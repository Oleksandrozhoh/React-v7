import {useState} from 'react'
import TextInput from './inputs/TextInputs';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const NoteForm = ({notes, setNotes}) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        priority: "Medium",
        category: "Work",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.description) {
            alert("Please fill in all required fields.");
            return;
        }
        
        const newNote = {
            id: Date.now(),
            ...formData
        };

        setNotes([...notes, newNote]);

        setFormData({
            title: "",
            priority: "Medium",
            category: "Work",
            description: ""
        });
    }

    return (  
    <>
    {/* Toggle Button */}
        <button className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover: border-purple-300 transition mb-4" 
        onClick={() => setIsFormVisible(!isFormVisible)}>
            {isFormVisible ? "Hide Form" : "Add New Note +"}
            </button>
    {/* Form */}
    {isFormVisible && (
    <form onSubmit={handleSubmit} className="mb-6">
    <TextInput
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required={true}
    />
    <SelectInput
        label="Priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        options={["High", "Medium", "Low"]}
        required={true}
    />
    <SelectInput
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        options={["Work", "Personal", "Ideas"]}
        required={true}
    />
    <TextAreaInput
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required={true}
    />
    <button 
    type='submit' className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>Add Note</button>
    </form>
    )}
    </>
    );
}
 
export default NoteForm;