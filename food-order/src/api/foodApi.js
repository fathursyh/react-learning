export const foodApi = {
    fetchAllMeals: async () => {
        const res = await fetch('http://localhost:3000/meals');
        if (!res.ok) throw new Error();
        return await res.json();
    }
}