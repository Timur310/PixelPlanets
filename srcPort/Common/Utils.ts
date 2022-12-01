function randomizeValue(): number {
	const value = (1 + 10E-16) * Math.random();
  	if (value > 1.0) 
    {
    	return 1.0;
    }
  	return value;
}

function randomizeFloat(min: number, max: number): number {
  	if(max == null) 
    {
    	max = (min == null ? Number.MAX_VALUE : min);
      	min = 0.0;
    }
  	if(min >= max) 
    {
    	throw new Error("Incorrect arguments.");
    }
    return min + (max - min) * randomizeValue();
}


export function randomFloat(): number
{
    return parseFloat(randomizeFloat(-10000,10000).toString().substring(0,15));
}