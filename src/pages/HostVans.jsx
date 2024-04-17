import React, { Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../Api";

export async function loader() {
    return defer({ hostVans: getHostVans() })
}

export default function HostVans() {
    const vansList = useLoaderData()

    return (
        <section className="host-vans">
            <h1 className="host-vans-title">List of Your Vans</h1>
            <Suspense fallback={<h3>Loading....</h3>}>
                <Await resolve={vansList.hostVans}>
                    {(hostVans) => {
                        const vansListElement = hostVans.map(hostVan => (
                            <Link
                                to={hostVan.id}
                                key={hostVan.id}
                                className="host-van-link-wrapper"
                            >
                                <div className="host-van-single" key={hostVan.id}>
                                    <img src={hostVan.imageUrl} alt={`Photo of ${hostVan.name}`} />
                                    <div className="host-van-info">
                                        <h3>{hostVan.name}</h3>
                                        <p>${hostVan.price}/day</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                        return (
                            <div className="host-vans-list">
                                <section>
                                    {vansListElement}
                                </section>
                            </div>
                        )
                    }}
                </Await>
            </Suspense>
        </section>
    )
}