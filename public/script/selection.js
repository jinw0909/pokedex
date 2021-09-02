const Init = function(){
    let selected_data;
    const show_delete_modal = function(){
        selected_data = $(this).parents('tr').attr('data-number');
        $('input[name=selected_data]').val(selected_data);
        // type = $(this).parents('tr').attr('data-type');
        $('.ui.modal').modal('show');
    };
    const delete_selection_data = function(){
        // 삭제
        // 삭제하고자 하는 번호 (id)
        const selected_data = $('input[name=selected_data]').val();
        const data_type = $('input[name=page_type]').val();
        
        // ajax를 이용해서 삭제 처리 controller 호출
        // 호출 결과 (응답 내용)
        // 성공일 떄 location.reload(); -> 새로 고침
        // 실패일 때 alert('문제가 발생하였습니다.');


        // if (data_type === 'department') {
            $.ajax({
                url: '/selection/delete/' + data_type,
                method: 'DELETE',
                data: { selected_data: selected_data},
                dataType: 'json',
                success: function(data){
                    console.log(data);
                    if (data.result) {
                        location.reload();
                    } else {
                        alert('문제가 발생하였습니다. 잠시 후 다시 시도해주세요');
                    }
                },
                error: function(err) {
                    console.log(err);
                    alert('문제가 발생하였습니다. 잠시 후 다시 시도해주세요');
                }
            })


    };

    const create_new_selection_data = function(){
        const page_type = $('input[name=page_type]').val();
        const input_data = $('input[name=name]').val().trim();

        if (input_data.length > 0) {
            $.ajax({
                url: '/selection/add/' + page_type,
                method: 'POST',
                data: { input_data: input_data },
                dataType: 'json',
                success: function(data){
                    // 등록 성공 시 새로고침
                    // 등록 실패 시 경고창
                    if (data.result) {
                        location.reload();
                    } else {
                        alert('문제가 발생하였습니다. 잠시 후 다시 시도해주세요');
                    }
                },
                error: function(err) {
                    console.log(err, '에러 발생');
                    alert('문제가 발생하였습니다. 잠시 후 다시 시도해주세요');
                }
            })
        } else {
            alert('추가할 내용을 입력해 주세요');
        }
    }

    return {
        event: function(){
            $('.ui.button.delete').on('click', show_delete_modal);
            $('#delete-btn').on('click', delete_selection_data);
            $('.ui.button.add').on('click', create_new_selection_data);
        },
    }

};
$(document).ready(function(){
    Init().event();
});