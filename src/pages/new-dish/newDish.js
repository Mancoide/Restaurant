import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { FirebaseContext } from '../../configs/firebase'
import { useNavigate } from 'react-router-dom'

const NewDish = () => {

    //Context con las operaciones de firebase
    const { firebase } = useContext(FirebaseContext)

    //Hook para redireccionar
    const navigate = useNavigate();

    // console.log({firebase})
    //validacion y leer datos
    const formik = useFormik({
        initialValues: {
            nombre: '',
            precio: '',
            category: '',
            imagen: '',
            descripcion: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string().min(3, 'Los Platillos deben tener al menos 3 caracteres')
                .required('El Nombre del platillo es obligatorio'),

            precio: Yup.number().min(1, 'Los Platillos deben tener al menos 1 caracter')
                .required('El Precio del platillo es obligatorio'),
            category: Yup.string()
                .required('La categoria del platillo es obligatoria'),
            descripcion: Yup.string()
                .min(10, 'La descripcion debe ser mas larga')
                .required('La descripcion del platillo es obligatoria'),
        }),
        onSubmit: platillo => {
            try {
                platillo.existencia =  true;              
                firebase.db.collection('productos').add(platillo)

                //Redireccionar
                navigate('/menu')
            } catch (error) {
                console.log(error);
            }
        }
    });

    return ( 
        <>
            <h1 className="text-3xl font-dark mb-4">Agregar Platillo</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>

                            <input 
                                id="nombre"
                                type={"text"}
                                placeholder="Nombre Platillo"
                                className="shadow appearance-none botder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={formik.values.nombre}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}    
                            />

                        </div>
                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role={'alert'}>
                                <p className="font-bold">{formik.errors.nombre}</p>
                            </div>
                        ) : null}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>

                            <input 
                                id="precio"
                                type={"number"}
                                placeholder="$20"
                                min={0}
                                className="shadow appearance-none botder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                value={formik.values.precio}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}    
                                />

                        </div>
                        {formik.touched.precio && formik.errors.precio ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role={'alert'}>
                                <p className="font-bold">{formik.errors.precio}</p>
                            </div>
                        ) : null}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Categoria</label>

                            <select 
                                className="shadow appearance-none botder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}    
                            >
                                <option value={""}>-- Seleccione --</option>
                                <option value={"desayuno"}>Desayuno</option>
                                <option value={"comida"}>Comida</option>
                                <option value={"cena"}>Cena</option>
                                <option value={"bebida"}>Bebidas</option>
                                <option value={"postre"}>Postre</option>
                                <option value={"ensalada"}>Ensalada</option>
                            </select>

                        </div>
                        {formik.touched.category && formik.errors.category ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role={'alert'}>
                                <p className="font-bold">{formik.errors.category}</p>
                            </div>
                        ) : null}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen</label>

                            <input 
                                id="imagen"
                                type={"file"}
                                className="shadow appearance-none botder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={formik.values.imagen}
                                onChange={formik.handleChange} />

                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">Descripci??n</label>

                            <textarea 
                                id="descripcion"
                                placeholder="Descripci??n del Platillo"
                                className="shadow appearance-none botder rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                value={formik.values.descripcion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}    
                            >
                            </textarea>

                        </div>
                        {formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role={'alert'}>
                                <p className="font-bold">{formik.errors.descripcion}</p>
                            </div>
                        ) : null}
                        <input 
                            type={"submit"}
                            className={"bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"}
                            value={'Agregar Platillo'}
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default NewDish;