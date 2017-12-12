import Realm from 'realm'

const ProjectSchema = {
  name: 'Project',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    description: 'string'
  }
}

const realm = new Realm({ schema: [ProjectSchema] })

export const addProject = (title, desc) => {
  try {
    realm.write(() => {
      realm.create('Project', {
        id: title,
        title: title,
        description: desc
      })
    })
  } catch (e) {
    console.log(e)
  }
}

export const queryProject = () => {
  return realm.objects('Project')
}

export default realm