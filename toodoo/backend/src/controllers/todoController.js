import Todo from "../models/Todo.js";

// Create Todo
export const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({
      success: true,
      message: "Todo Created Successfully",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Update Todo
export const updateTodo = async (req, res) => {

    try{

        const todo = await Todo.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new:true,
            }

        );

        res.status(200).json({

            success:true,

            message:"Todo Updated",

            data:todo

        });

    }catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};
// Delete Todo
export const deleteTodo = async (req,res)=>{

    try{

        await Todo.findByIdAndDelete(req.params.id);

        res.status(200).json({

            success:true,

            message:"Todo Deleted"

        });

    }catch(error){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};