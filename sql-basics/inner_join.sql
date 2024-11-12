-- SELECT restaurants.id, restaurants.name, addresses.* FROM restaurants INNER JOIN addresses ON restaurants.address_id = addresses.id;
SELECT restaurants.id, restaurants.name, addresses.*, types.name AS type FROM restaurants
	INNER JOIN addresses ON restaurants.address_id = addresses.id
    INNER JOIN types ON restaurants.type_id = types.id
    WHERE addresses.city = 'Munich';