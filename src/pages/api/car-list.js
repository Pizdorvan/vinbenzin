export default async function handler(req, res) {
  const queryParams = new URLSearchParams(req.query)
  const response = await fetch(`http://46.53.152.174/api/v1/carlist/?${queryParams}`, {
    headers: {
      Authorization: 'Token c26f365485f775399a4fde1132fa8e4a6c3f8873'
    }
  })
  const json = await response.json()

  res.status(200).json(json)
}
