// Create
export const createTodo = async (req, res) => {
	return res.json({ message: "Todo Created successfully" });
};

// Read
export const readTodo = async (req, res) => {
	return res.json({ message: "Todo Read successfully" });
};

// Update
export const updateTodo = async (req, res) => {
	return res.json({ message: "Todo Update successfully" });
};

// Delete
export const deleteTodo = async (req, res) => {
	return res.json({ message: "Todo Delete successfully" });
};
