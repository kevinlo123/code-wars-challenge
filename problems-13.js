//Find the total sum of angles in an n sided shape. N will be greater than 2.

const angle = n => {return (n - 2) * 180};

/*The formula for calculating the sum of the interior angles of a regular polygon is:
(n - 2) × 180° where n is the number of sides of the polygon.
This formula comes from dividing the polygon up into triangles using full diagonals.
We already know that the interior angles of a triangle add up to 180°.*/
