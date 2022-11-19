export default async function handler(req, res) {
  const { vin } = req.query
  const response = await fetch(`http://46.53.152.174/api/v1/carlist/${vin}`, {
    headers: {
      Authorization: 'Token c26f365485f775399a4fde1132fa8e4a6c3f8873'
    }
  })
  const json = await response.json()

  // TODO add 404

  res.status(200).json(json)
}
