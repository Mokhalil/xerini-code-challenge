import {observer} from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {IUser} from '../../../app/models/user';
import {StoreContext} from "../../../app/stores/_root_store";

interface IProps {
    user: IUser
}

const ProfileViewSection = ({user}: IProps) => {
    const history = useHistory();
    const store = useContext(StoreContext)
    return (
        <div id={'profile-info'}>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="bg-white px-4 py-5 border-gray-200 sm:px-6">
                    <div className="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
                        <div className="ml-4 mt-4">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Profile Information
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
                            </p>
                        </div>
                        <div className="ml-4 mt-4 flex-shrink-0">
                            <button type="button"
                                    id={'edit_profile'}
                                    onClick={()=>{
                                        history.push(`/edit`)
                                    }}
                                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid gap-x-4 gap-y-8 grid-cols-3">
                        <div className="col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                First Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.first_name}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Other Names
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.other_names}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.email}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Mobile number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.mobile}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Company
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.company}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Username
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.username}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Password
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.password}
                            </dd>
                        </div>

                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Street
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.address.street}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Town
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.address.town}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                County
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.address.county}
                            </dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Postcode
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                {user?.address.postcode}
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>


        </div>
    );
};


export default observer(ProfileViewSection);