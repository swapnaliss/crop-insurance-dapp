
export const getAllAppliedPoliciesFromMongo = async () => {
    const response = await fetch('http://localhost:3000/api/applyPolicy');
    const data = await response.json();
    return data
}
