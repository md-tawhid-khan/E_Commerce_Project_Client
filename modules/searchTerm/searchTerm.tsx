
import { Form, FormControl, FormField, FormItem,  } from '@/components/ui/form';
import { useForm } from 'react-hook-form';




const SearchTerm = () => {
  
const form = useForm()

  return (
    <div >
      
      <div >
        <Form {...form} >
          <form  className="join max-w-md  flex-grow ">
            <FormField
             
              name="name"
              render={({ field }) => (
                <FormItem>
                  
                  <FormControl className="mx-auto ">
                    <input
                      className="input join-item w-full max-w-6xl border border-gray-300 rounded-l-full py-2 px-5"
                      type="text"
                      placeholder="Search for Products"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>

                </FormItem>
              )}
            />
         
            <button
              
              type="submit"
              className="btn join-item rounded-r-full "
            >
              
                Search
             
            </button>
          </form>
        </Form>

         
      </div>
    </div>
  )
};

export default SearchTerm;