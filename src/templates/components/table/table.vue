<template lang="pug">
    .table
        v-simple-table
            thead
                tr
                    th(v-for="item in registries")
                        p {{ item.name }}
            tbody
                td(v-for="item in registries")
                    p {{ item.text }}
</template>

<style lang="scss">

</style>

<script>
    export default {
        name: "TableComponent",
        data() {
            return {
                registries: [
                    {
                        name:"Автоперевозчики",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Организации",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Обслуживаемые маршруты",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Водители",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Транспортные средства",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Сведения ТО",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Блокировка ТС",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Настройка маршрутов",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Версии маршрута",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Остановки маршрута",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Обслуживаемый маршрут",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Объекты маршрута",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Документы",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Направление следования",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Список рейсов расписаний ",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Список расписаний",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Реестр карт маршрутов",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                    {
                        name:"Договоры с перевозчиками",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat justo metus. Curabitur mi odio, fringilla at aliquet eu, iaculis vitae quam. Nulla iaculis maximus neque. Cras dignissim enim a dolor interdum imperdiet. Praesent quis massa purus. Vivamus a libero orci. Sed nec porta orci. Curabitur leo nunc, semper nec tortor ac, bibendum maximus ante. Morbi commodo orci eget nisi bibendum bibendum. Maecenas accumsan tortor elementum metus accumsan ornare. Nullam aliquet diam quis nisl fermentum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In commodo dui ante, convallis congue ligula mattis in. Phasellus sed molestie nisi. Mauris sed velit a orci consectetur molestie commodo vel massa."
                    },
                ]
            }
        }
    };
</script>