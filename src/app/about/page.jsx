// type Repository = {
//     id: number,
//     name: string,
//     full_name: string,
// };
export default async function About() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js', {
        cache: 'no-store', // don't cache this response, we want to fetch it every time because by default it static
        next: {
            revalidate: 5, // revalidate this page every 5 seconds it means that nextjs will fetch this page every 5 seconds
        },
    });
    const json = await res.json();

    return <h1>{json.id}</h1>;
}
