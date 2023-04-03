package br.edu.utfpr.pb.pw25s.server.error;

import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

import java.util.Map;

@RestController
public class ErrorHandler implements ErrorController {
    private ErrorAttributes errorAttributes;

    public ErrorHandler(ErrorAttributes errorAttributes){
        this.errorAttributes = errorAttributes;
    }

    @RequestMapping("error")
    public ApiError handlerError(WebRequest webRequest){
        Map<String, Object> attributes = errorAttributes.getErrorAttributes(webRequest, ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE));

        return new ApiError((Integer) attributes.get("status"), (String) attributes.get("message"), (String) attributes.get("path"));
    }
}
