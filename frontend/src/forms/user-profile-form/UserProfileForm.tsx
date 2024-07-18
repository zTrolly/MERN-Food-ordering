import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import LoadingButton from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().trim().min(1, "Nome é obrigatório"),
  addressLine1: z.string().trim().min(1, "Endereço é obrigatório"),
  addressLine2: z.string().trim().min(1, "Bairro é obrigatório"),
  city: z.string().trim().min(1, "Cidade é obrigatória"),
  zipCode: z.string().min(1, "CEP é obrigatório").regex(/^\d{5}-\d{3}$/, "CEP inválido"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
}

const UserProfileForm = ({onSave, isLoading}: Props) => {

  const cepMask = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  }
  


  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
  });


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)} className='space-y-4 bg-gray-50 rounded-lg md:p-10'>
        <div>
          <h2 className='text-2xl font-bold'>Perfil do Usuário</h2>
          <FormDescription>Atualize suas informações de perfil</FormDescription>
        </div>

        <FormField control={form.control} name='email' render={({field}) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} disabled className='bg-white'/>
            </FormControl>
          </FormItem>
        )} />

        <FormField control={form.control} name='name' render={({field}) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input {...field}  className='bg-white'/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        )} />

          <div className='flex flex-col md:flex-row gap-4'>
          <FormField control={form.control} name='addressLine1' render={({field}) => (
            <FormItem className='flex-1'>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input {...field}  className='bg-white'/>
              </FormControl>
              <FormMessage/>

            </FormItem>
           )}
           />

          <FormField control={form.control} name='addressLine2' render={({field}) => (
            <FormItem className='flex-1'>
              <FormLabel>Bairro</FormLabel>
              <FormControl>
                <Input {...field}  className='bg-white'/>
              </FormControl>
              <FormMessage/>

            </FormItem>
           )}
           />

          <FormField control={form.control} name='city' render={({field}) => (
            <FormItem className='flex-1'>
              <FormLabel>Cidade</FormLabel>
              <FormControl>
                <Input {...field}  className='bg-white'/>
              </FormControl>
              <FormMessage/>

            </FormItem>
           )}
           />


          <FormField control={form.control} name='zipCode' render={({field}) => (
            <FormItem>
              <FormLabel>CEP</FormLabel>
              <FormControl>
                <Input {...field} value={cepMask(field.value)}  className='bg-white'/>
              </FormControl>
              <FormMessage/>

            </FormItem>
           )}
           />
           
        </div>

      {isLoading ? <LoadingButton /> : <Button type='submit' className='bg-orange-500'>Enviar</Button> }
      </form>
      
    </Form>
  )
}

export default UserProfileForm;
