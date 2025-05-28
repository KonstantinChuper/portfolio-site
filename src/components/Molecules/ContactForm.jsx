import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useEffect } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

      const now = new Date()
      const formattedDateTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })

      const response = await emailjs.send(serviceId, templateId, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        time: formattedDateTime
      })

      console.log('SUCCESS!', response.status, response.text)
      setSubmitStatus({ success: true, message: 'Message sent successfully!' })
      reset()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-colorTextSecondary">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-3 bg-colorBlack border ${
                errors.name ? 'border-red-500' : 'border-gray-800 focus:border-colorPrimary'
              } rounded text-white focus:outline-none bg-colorMenu transition-colors`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-colorTextSecondary">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-3 bg-colorBlack border ${
                errors.email ? 'border-red-500' : 'border-gray-800 focus:border-colorPrimary'
              } rounded text-white focus:outline-none bg-colorMenu transition-colors`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Please enter a valid email'
                }
              })}
            />
            {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block mb-2 text-colorTextSecondary">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className={`w-full px-4 py-3 bg-colorBlack border ${
              errors.subject ? 'border-red-500' : 'border-gray-800 focus:border-colorPrimary'
            } rounded text-white focus:outline-none bg-colorMenu transition-colors`}
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-colorTextSecondary">
            Your Message
          </label>
          <textarea
            id="message"
            rows="6"
            className={`w-full px-4 py-3 bg-colorBlack border ${
              errors.message ? 'border-red-500' : 'border-gray-800 focus:border-colorPrimary'
            } rounded text-white focus:outline-none transition-colors bg-colorMenu resize-none`}
            {...register('message', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Message should be at least 10 characters'
              }
            })}
          ></textarea>
          {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-20 py-4 bg-colorPrimary text-colorBlack font-medium rounded hover:bg-opacity-90 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {submitStatus && (
          <div
            className={`mt-4 p-3 rounded ${
              submitStatus.success ? 'bg-green-800/50 text-green-200' : 'bg-red-800/50 text-red-200'
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  )
}
