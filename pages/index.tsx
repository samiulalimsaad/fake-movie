import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { months } from "../components/utils/months";

const Home: NextPage = () => {
    const [state, setState] = useState<any>([]);

    const router = useRouter();

    useEffect(() => {
        const isAuth = JSON.parse(localStorage.getItem("auth") || "false");

        if (!isAuth) {
            router.push("/login");
        }

        const getData = async () => {
            try {
                const { data } = await axios.post(
                    "https://hoblist.com/api/movieList",
                    {
                        category: "movies",
                        language: "kannada",
                        genre: "all",
                        sort: "voting",
                    }
                );
                console.log(data);
                setState(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <section className="flex justify-center py-4 bg-slate-200">
            <div className="flex flex-col w-1/3 gap-4">
                {state?.result?.map((v: any) => (
                    <div
                        key={v._id}
                        className="rounded-md shadow-xl bg-base-100"
                    >
                        <div className="p-2 card card-side">
                            <div className="flex flex-col items-center justify-center">
                                <ChevronUpIcon className="w-6 h-6" />
                                <p>{v.voting}</p>
                                <ChevronDownIcon className="w-6 h-6" />
                            </div>
                            <div className="flex flex-row card-body">
                                <figure className="">
                                    <Image
                                        src={v.poster}
                                        alt={v.title}
                                        width={300}
                                        height={400}
                                    />
                                </figure>
                                <div>
                                    <h2 className="card-title">{v.title}</h2>
                                    <p>
                                        <span className="font-bold text-slate-500">
                                            Genre :
                                        </span>{" "}
                                        {v.genre}
                                    </p>
                                    <p>
                                        <span className="font-bold text-slate-500">
                                            Director :
                                        </span>{" "}
                                        {v.director.join(", ")}
                                    </p>
                                    <p>
                                        <span className="font-bold text-slate-500">
                                            Starring :
                                        </span>{" "}
                                        {v.stars.join(", ")}
                                    </p>
                                    <p>
                                        {v.runtime || "Mins"} | {v.language} |{" "}
                                        {new Date(1617218999).getDate()}
                                        {
                                            months[
                                                new Date(1617218999).getMonth()
                                            ]
                                        }
                                    </p>
                                    <p className="text-sky-600">
                                        {v.pageViews} views | voted by{" "}
                                        {v.voted.length} people
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-0 m-0 card-actions">
                            <button className="w-full btn btn-accent">
                                Watch Trailer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
