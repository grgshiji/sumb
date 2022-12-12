

const sum_of_two_numbers_calculator = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello sum_of_two_numbers_calculator`}))
  res.end()
  
}

export default sum_of_two_numbers_calculator
