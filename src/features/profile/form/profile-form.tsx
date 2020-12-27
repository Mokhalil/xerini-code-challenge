import React, { Fragment, useState } from "react";
import { IUser } from "../../../app/models/user";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import { profileFormSchema } from "./profile-fom-validation";

interface IProps {
  user: IUser;
  onSubmit?: (user: IUser) => void;
  readonly?: boolean;
}

const ProfileForm = ({ user, onSubmit, readonly }: IProps) => {
  const history = useHistory();
  const [formValues, setFormValues] = useState<IUser>(user);
  const onFormSubmit = (values: any) => {
    if(onSubmit)
      onSubmit(values)
  };

  return (
    <Formik
      onSubmit={onFormSubmit}
      initialValues={formValues}
      enableReinitialize={true}
      validationSchema={profileFormSchema}
    >
      {(formik) => (
        <div className={`${((readonly)?'bg-purple-200':'bg-white')} px-8 rounded-lg`}>
          <Form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda non nisi deleniti incidunt et iusto iste nulla
                    provident libero laboriosam quos praesentium earum neque
                    delectus, consequatur cumque nihil quidem doloribus.
                  </p>
                </div>
                <div className="space-y-6 sm:space-y-5">
                  <div className="grid grid-cols-3 gap-4 items-start border-t border-gray-200 pt-5">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700 mt-px pt-2"
                    >
                      First name
                    </label>
                    <div className="mt-0 sm:col-span-2">
                      <Field
                        disabled={readonly}
                        {...formik.getFieldProps("first_name")}
                          id={'first_name'}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {formik.errors.first_name && formik.touched.first_name ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {formik.errors.first_name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="other_names"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Other names
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <Field
                        disabled={readonly}
                        {...formik.getFieldProps("other_names")}
                        id={'other_names'}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {formik.errors.other_names &&
                      formik.touched.other_names ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {formik.errors.other_names}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Email address
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <Field
                        disabled={readonly}
                        id={'email'}
                        {...formik.getFieldProps("email")}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {formik.errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Street
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <Field
                        disabled={readonly}
                        id={'address.street'}
                        {...formik.getFieldProps("address.street")}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {formik.errors.address?.street &&
                      formik.touched.address?.street ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {formik.errors.address?.street}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="town"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Town
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <Field
                        disabled={readonly}
                        id={'address.town'}
                        {...formik.getFieldProps("address.town")}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {formik.errors.address?.town &&
                      formik.touched.address?.town ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {formik.errors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="county"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      County
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <Field
                        disabled={readonly}
                        id={'county'}
                        {...formik.getFieldProps("address.county")}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {formik.errors.address?.county &&
                      formik.touched.address?.county ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {formik.errors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="postcode"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Postcode
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <Field
                        disabled={readonly}
                        {...formik.getFieldProps("address.postcode")}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {formik.errors.address?.postcode &&
                      formik.touched.address?.postcode ? (
                        <p
                          className="mt-2 text-sm text-red-600"
                          id="email-error"
                        >
                          {formik.errors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Notifications
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    We'll always let you know about important changes, but you
                    pick what else you want to hear about.
                  </p>
                </div>
                <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                  <div className="pt-6 sm:pt-5">
                    <div role="group" aria-labelledby="label-email">
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                        <div>
                          <div
                            className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                            id="label-email"
                          >
                            Notify me using
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:col-span-2">
                          <div className="max-w-lg space-y-4">
                            <div className="relative flex items-start">
                              <div className="flex items-center h-5">
                                <Field
                                  disabled={readonly}
                                  name="preferences"
                                  type="checkbox"
                                  value={"post"}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="comments"
                                  className="font-medium text-gray-700"
                                >
                                  Post
                                </label>
                                <p className="text-gray-500">
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit.
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <Field
                                    disabled={readonly}
                                    name="preferences"
                                    type="checkbox"
                                    value={"sms"}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="candidates"
                                    className="font-medium text-gray-700"
                                  >
                                    SMS message
                                  </label>
                                  <p className="text-gray-500">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                  <Field
                                    disabled={readonly}
                                    name="preferences"
                                    type="checkbox"
                                    value={"email"}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="offers"
                                    className="font-medium text-gray-700"
                                  >
                                    Email
                                  </label>
                                  <p className="text-gray-500">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              {formik.errors.preferences &&
                              formik.touched.preferences ? (
                                <p
                                  className="mt-2 text-sm text-red-600"
                                  id="email-error"
                                >
                                  {formik.errors.preferences}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-end">
                {readonly ? (
                  <Fragment>
                    <button
                      type="button"
                      id={'go_to_dashboard'}
                      onClick={() => {
                        history.push("/profile");
                      }}
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Go back to profile page 
                    </button>
                  </Fragment>
                ) : (
                  <Fragment>
                    {" "}
                    <button
                      type="button"
                      onClick={() => {
                        history.push("/profile");
                      }}
                      className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      id={'submit_form'}
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </Fragment>
                )}
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ProfileForm;
