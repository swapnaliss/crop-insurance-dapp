
export const getAllPoliciesFromMongo = async () => {
    const response = await fetch('http://localhost:3000/api/policy');
    const data = await response.json();
    return data
}
