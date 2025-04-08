function calculateTsp(grams)
{
    return  grams / 12.5;
}

function calculateWater(weight)
{
    return weight / 2;
}

function calculateCalories(age, weight, heightInInches, gender)
{
    return 655 + (gender ? 9.6 : 4.3) * weight + (gender == "male" ? 1.85 : 4.7) * heightInInches - 4.7 * age;
}