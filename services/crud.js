const getAll = (Model) => async (req, res) => {
    try {
        const news = await Model.findAll();
        res.json(news);
    } catch (error) {
        res.status(500).json({error: 'Ошибка получения данных'});
    }
}

const getById = (Model) => async (req, res) => {
    try {
        const id = req.params.id;
        const [getNew] = await Model.findAll({where: {id}});
        if (getNew) {
            res.json(getNew);
        } else {
            res.json({'message': 'Данные не найдены'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ошибка получения данных'});
    }
}

const createItem = (Model) => async (req, res) => {
    const new_item = await Model.create(req.body);
    res.json(new_item);
}

const updateItem = (Model) => async (req, res) => {
    try {
        const id = req.params.id;
        // [updated] - проверка на изменения данных. Если найден и изменен 1, не найден 0
        const [updated] = await Model.update(req.body, {where: {id}});
        if (updated) {
            res.json({message: 'Обновлено успешно'});
        } else {
            res.json({message: 'Данные не найдены'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ошибка получения данных'});
    }
}

const deleteItem = (Model) => async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Model.destroy({where: {id}});
        if (deleted) {
            res.json({message: 'Удалено успешно'});
        } else {
            res.json({message: 'Данные не найдены'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ошибка получения данных'});
    }
}

module.exports = {
    getAll,
    getById,
    createItem,
    updateItem,
    deleteItem,
};
