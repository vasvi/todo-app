import { useFormik } from "formik";
import { useMutation } from "react-query";
import Layout from '../components/layout';
import axios from "axios";

const AddTodo = () => {

    const formik = useFormik({
        initialValues: {
          title: "",
          body: ""
        },
        onSubmit: (values) => {
            // mutate data
          }
      });

    return(
    <Layout headerName="Add Todo" showButton={false}>
    <div>
    <h1 className="text-2xl text-center pt-6">Add Todo</h1>
    <form onSubmit={formik.handleSubmit} className="pt-8 flex items-center justify-center">
    <div className="border-2 px-16 py-16 grid gap-6 mb-6">
    <div>
    <label className="pr-4">Title:</label>
    <input id="title" name="title" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" value={formik.values.title} onChange={formik.handleChange} />
    </div>
    <button color="primary" type="submit" className="w-full mt-4 py-2 border-stone-400 bg-blue-800">Add</button>
    </div>
    </form>
    </div>
    </Layout>
    )
}

export default AddTodo;
