package br.edu.utfpr.pb.pw25s.server;

import br.edu.utfpr.pb.pw25s.server.model.Category;
import br.edu.utfpr.pb.pw25s.server.model.User;
import br.edu.utfpr.pb.pw25s.server.repository.CategoryRepository;
import br.edu.utfpr.pb.pw25s.server.repository.UserRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class CategoryControllerTest {

    private static final String API_CATEGORY = "/categories";

    private static String JWT_TOKEN;

    @Autowired
    private TestRestTemplate testRestTemplate;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private UserRepository userRepository;

    @BeforeEach
    public void cleanup() {
        categoryRepository.deleteAll();
        testRestTemplate.getRestTemplate().getInterceptors().clear();
    }

    /* @BeforeAll
    public void createUserAndLogin(){
        User user = new User();
        user.setUsername("test-user");
        user.setDisplayName("test-display");
        user.setPassword("P4ssword");

        userRepository.save(user);
    } */

    public <T> ResponseEntity<T> postSignup(Object request, Class<T> responseType) {
        return testRestTemplate.postForEntity(API_CATEGORY, request, responseType);
    }

    private Category createValidCategory() {
        Category category = new Category();
        category.setName("Categoria número 1");

        return category;
    }

    @Test
    public void postCategory_whenCategoryIsValid_receiveOk() {
        Category category = createValidCategory();
        ResponseEntity<Object> response = postSignup(category, Object.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
}
