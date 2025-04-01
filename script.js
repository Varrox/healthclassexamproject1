function calculateTsp(grams)
{
    return 12.5 / grams;
}

function calculateWater(weight, kilograms)
{
    return weight * (kilograms ? 2.205 : 1) / 2;
}

function calculateCalories(age, weight, kilograms, heightInInches, gender) // gender is true for male and false for female
{
    return 655 + (gender ? 9.6 : 4.3) * weight * (kilograms ? 2.205 : 1) + (gender ? 1.85 : 4.7) * heightInInches - 4.7 * age
}

function main()
{
    console.log("hello")
}