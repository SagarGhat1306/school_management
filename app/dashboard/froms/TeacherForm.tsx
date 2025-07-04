'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import Image from 'next/image';

const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long!" }).max(20, { message: 'Username must be at most 20 characters long' }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(3, { message: "Password must be at least 3 characters long!" }).max(20, { message: 'Password must be at most 20 characters long' }),
  firstName: z.string().min(3, { message: "First name is required!" }),
  lastName: z.string().min(3, { message: "Last name is required!" }),
  phone: z.string().min(3, { message: "Phone is required!" }),
  address: z.string().min(3, { message: "Address is required!" }),
  birthaday: z.string().min(3, { message: "Birth date is required!" }),
  Blood: z.string().min(1, { message: "Blood type is required!" }),
  sex: z.enum(['male', 'female'], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: 'Image is required' })
});

type FormData = z.infer<typeof schema>;

const TeacherForm = ({ type, data }: { type: 'create' | 'update' | 'delete'; data?: any }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onsubmit = handleSubmit(data => {
    console.log(data);
  });

  return (
    <form className="max-w-3xl mx-auto p-4 flex flex-col gap-6" onSubmit={onsubmit}>
      <h1 className="text-2xl font-semibold text-center">{type === 'create' ? 'Create a New Teacher' : 'Update Teacher'}</h1>

      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Username</label>
          <input type="text" {...register("username")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input type="email" {...register("email")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Password</label>
          <input type="password" {...register("password")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">First Name</label>
          <input type="text" {...register("firstName")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Last Name</label>
          <input type="text" {...register("lastName")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          <input type="text" {...register("phone")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Address</label>
          <input type="text" {...register("address")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.address && <p className="text-red-500 text-xs">{errors.address.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Birth Date</label>
          <input type="date" {...register("birthaday")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.birthaday && <p className="text-red-500 text-xs">{errors.birthaday.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Blood Type</label>
          <input type="text" {...register("Blood")} className="w-full p-2 border border-gray-300 rounded-md" />
          <select {...register("sex")} className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="o">O</option>
            <option value="AB">AB</option>
          </select>
          {errors.Blood && <p className="text-red-500 text-xs">{errors.Blood.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Sex</label>
          <select {...register("sex")} className="w-full p-2 border border-gray-300 rounded-md">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex && <p className="text-red-500 text-xs">{errors.sex.message}</p>}
        </div>

        <div>
          <label className="text-sm font-medium">Upload Image</label>
          <input type="file" {...register("img")} className="w-full p-2 border border-gray-300 rounded-md" />
          {errors.img && <p className="text-red-500 text-xs">{errors.img.message}</p>}
        </div>
      </div>

      <button type="submit" className="w-full md:w-1/3 mx-auto mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        {type === 'create' ? 'Create' : 'Update'}
      </button>
    </form>
  );
};

export default TeacherForm;
