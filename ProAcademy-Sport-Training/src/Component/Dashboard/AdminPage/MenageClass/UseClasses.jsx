import { useQuery } from "@tanstack/react-query";

const UseClasses = () => {
//  https://b7a12-summer-camp-server-side-faruks23.vercel.app/classes

    const {data: Classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['Classes'],
        queryFn: async() => {
            const res = await fetch("https://b7a12-summer-camp-server-side-faruks23.vercel.app/classes"
            );
            return res.json();
        }
    })

    return [Classes, loading, refetch];
}

export default UseClasses;