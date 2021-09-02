const Init = function(){

    const show_delete_modal = function(){
        $('.ui.basic.modal').modal('show');
    }
    const delete_usr = function(){
        let id = $('.ui.grid.mb').attr('data-number');
        console.log(id);
        alert(id);
        // 0) 어떤 데이터를 삭제할 것인지 id값을 구한다.
        // 1) ajax를 이용해서 삭제 처리를 수행하는 controller에 연결 (http 통신)
        // 2) http 통신을 통한 처리 결과를 받아서
        // 3) 삭제 처리 성공일 시 /main 호출 (메인리스트 화면으로 이동)
        // 4) 삭제 처리 실패일 시 alert() 로 문제가 발생했다고 안내

        // /detail/delete/:index
        $.ajax({
            url: '/detail/delete/' + id,
            method: 'DELETE',
            dataType: 'json',
            success: function(data){
                // http 통신 (삭제 요청) 결과 처리
                console.log('삭제 요청에 대한 응답 결과', data);
                if (data.result) {
                    // 메인리스트로 이동
                    location.href = '/main';
                } else {
                    alert('문제가 발생했습니다. 잠시 후에 다시 시도해주세요');
                }
            }, 
            error: function(err){
                console.log('에러 발생', err);
                alert('문제가 발생했습니다. 잠시 후에 다시 시도해 주세요');
            }
        });
    }
    
    return {
        event: function(){
            $('#trash-icon').on('click', show_delete_modal);
            $('#delete-btn').on('click', delete_usr);
        },
    }

};
$(document).ready(function(){
    Init().event();
});