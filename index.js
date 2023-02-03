import { request } from "express"


const sum_of_two_numbers_calculator = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({ success: true, msg: "Health check success" }))
    res.end()
  }
  let sum = 0
  const numStr = req.url.split("?")[1]
  if (numStr) {
    const nums = numStr.split("&").map((num) => parseInt(num.split("=")[1]))
    sum = nums[0] + nums[1]
  }

  // Add your code here
  res.write(JSON.stringify({ success: true, msg: `${sum}` }))
  res.end()

}

export default sum_of_two_numbers_calculator
