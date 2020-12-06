module.exports = [
	{
		migrations: ["src/migrations/*.ts"],
		cli: {
			migrationsDir: "src/migrations",
		},
	},
	{
		name: "seed",
		migrations: ["src/seeds/*.ts"],
		cli: {
			migrationsDir: "src/seeds",
		},
	},
];
