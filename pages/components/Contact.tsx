import { NextPage } from 'next';
import getConfig from 'next/config';

const Contact: NextPage = () => {
    const { publicRuntimeConfig } = getConfig();

    return (
        <div id='contact' className='w-full min-h-screen flex justify-center items-center p-4'>
            <form
                action={`mailto:shieksirajkhan290@gmail.com?subject=Contact%20Form&body=Name:%20%0D%0AEmail:%20%0D%0AMessage:%20%0D%0A`}
                method='POST'
                encType='multipart/form-data'
                name='EmailForm'
                className='flex flex-col max-w-[600px] w-full'
            >
                <div className='pb-8 md:mt-44 mt-28'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-700 text-gray-300 lg:ml-48'>Contact</p>
                    <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - shieksirajkhan290@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows={10} placeholder='message'></textarea>
                <input type='submit' value="Let's Collaborate" className='text-white border-2 hover:bg-pink-700 hover:border-pink-700 px-4 py-2 my-8 mx-auto flex items-center' placeholder="Let's Collaborate" />
            </form>
        </div>
    )
}

export default Contact;
