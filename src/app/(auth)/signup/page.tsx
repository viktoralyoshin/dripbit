import AuthForm from '@/components/ui/AuthForm';

export default function Auth(){
    return(
        <section className='h-full bg-black md:w-1/2 w-full'>
            <AuthForm type='signup'/>
        </section>
    );
 };